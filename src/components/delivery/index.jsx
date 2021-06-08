import React, { useRef, useEffect, useCallback } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { InputsBox } from './inputs-box';
import styles from './delivery.module.css';
import { DeliveryMethod } from './delivery-method';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DELIVERY_FORM_VALUE } from '../../services/actions/delivery';
import { MapSuggestComponent } from './delivery-suggest-input';

const mapState = {
  center: [55.753994, 37.622093],
  zoom: 9,
  behaviors: ['scrollZoom'],
  controls: []
};

export default function SuggestInput({ onChange, value }) {
  return (
    <YMaps enterprise query={{ apikey: 'api-key' }}>
      <MapSuggestComponent onChange={onChange} value={value} />
    </YMaps>
  );
}

export const Delivery = () => {
  const address = useSelector(state => state.delivery.deliveryForm.address);
  const dispatch = useDispatch();
  const setAddress = address => {
    dispatch({ type: SET_DELIVERY_FORM_VALUE, field: 'address', value: address });
  };
  const ymaps = useRef(null);
  const placemarkRef = useRef(null);
  const mapRef = useRef(null);

  const getGeocodeResult = async criteria => {
    return !!ymaps.current && !!criteria ? await ymaps.current.geocode(criteria) : null;
  };
  const createPlacemark = useCallback(
    coords => {
      return new ymaps.current.Placemark(
        coords,
        {},
        {
          preset: 'islands#blueCircleDotIcon'
        }
      );
    },
    [ymaps]
  );

  const getAddressByCoords = async coords => {
    placemarkRef.current.properties.set('iconCaption', 'Загрузка...');
    const result = await getGeocodeResult(coords);
    if (result) {
      const newAddress = getAddressFromGeocodeResult(result);
      setAddress(newAddress);

      placemarkRef.current.properties.set({
        iconCaption: ''
      });
    }
  };

  const getAddressFromGeocodeResult = useCallback(data => {
    const firstGeoObject = data.geoObjects.get(0);
    const newAddress = [
      firstGeoObject.getLocalities().length
        ? firstGeoObject.getLocalities()
        : firstGeoObject.getAdministrativeAreas(),
      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
      !!firstGeoObject.getPremiseNumber() && firstGeoObject.getPremiseNumber()
    ]
      .filter(Boolean)
      .join(', ');
    return newAddress;
  }, []);

  const zoomToPoint = coords => {
    mapRef.current.setCenter(coords);

    mapRef.current.setZoom(18, {
      smooth: true,
      position: coords,
      centering: true,
      duration: 5
    });
  };

  const updatePlaceMark = async () => {
    const result = await getGeocodeResult(address);
    if (result) {
      const firstObject = result.geoObjects.get(0);
      if (firstObject) {
        const coords = result.geoObjects.get(0).geometry.getCoordinates();
        renderPlaceMark(coords);
        zoomToPoint(coords);
      }
    }
  };

  const renderPlaceMark = useCallback(
    coords => {
      if (placemarkRef.current) {
        placemarkRef.current.geometry.setCoordinates(coords);
      } else {
        placemarkRef.current = createPlacemark(coords);
        mapRef.current.geoObjects.add(placemarkRef.current);
      }
    },
    [placemarkRef, mapRef, createPlacemark]
  );

  const onMapClick = useCallback(
    e => {
      const coords = e.get('coords');
      renderPlaceMark(coords);
      getAddressByCoords(coords);
    },
    [getAddressByCoords, renderPlaceMark]
  );

  useEffect(
    () => {
      if (address) {
        updatePlaceMark();
      }
    },
    [address]
  );

  const onLoad = ymapsInstance => {
    ymaps.current = ymapsInstance;
  };

  return (
    <section className={`${styles.delivery}`}>
      <div className={styles.inputbox}>
        <SuggestInput onChange={setAddress} value={address} />
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map
            modules={['Placemark', 'geocode', 'geoObject.addon.balloon']}
            instanceRef={mapRef}
            onLoad={onLoad}
            onClick={onMapClick}
            state={mapState}
            width="100%"
            height="280px"
          />
        </YMaps>
      </div>
      <InputsBox />
      <DeliveryMethod />
    </section>
  );
};
