import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import Api from '../../Api';

import {request, PERMISSIONS} from 'react-native-permissions'; /// este é o que faz pedir permissão para usar a localização;
import Geolocation from '@react-native-community/geolocation'; /// para pegar a localização do celular;

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

const index = () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = React.useState('');
  const [coords, setCoords] = React.useState(null); /// coordenadas da localização do celular;
  const [loading, setLoading] = React.useState(false);
  const [listBarber, setListBarber] = React.useState([]);

  const handleLocationFinder = async () => {
    setCoords(null);

    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );

    if (result == 'granted') {
      setLoading(true);

      setLocationText(''); /// zerando o campo de pesquisa de barbeiros;
      setListBarber([]); /// zerando a lista de barbeiros;

      /// granted significa que deu o acesso ao celular para a localização;
      Geolocation.getCurrentPosition(info => {
        // console.log(info)
        setCoords(info.coords);
        getBarbers();
      });
    }
  };

  const getBarbers = async () => {
    setLoading(true);
    setListBarber([]);

    let res = await Api.getBarbers();
    // console.log(res.data);
    if (res.error == '') {
      setListBarber(res.data);
    } else {
      alert('Erro: ' + res.error);
    }

    setLoading(false);
  };

  React.useEffect(() => {
    getBarbers();
  }, []);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#fff"
            value={locationText}
            onChangeText={t => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#fff" />}
      </Scroller>
    </Container>
  );
};

export default index;
