import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Baslik = () => {
    return (
        <View style={styles.ust}>
            <Text style={styles.ust_baslik}>Yapılacaklar</Text>
            <Text style={styles.sayi}>Sayı</Text>
        </View>
    );
}

export default Baslik;

const styles = StyleSheet.create({

    ust_baslik: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#ffce37',
        flex: 1,
    },
    sayi: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#ffce37',
    },
    ust: {
        flexDirection: 'row',
        marginTop: 45,
        marginLeft: 10,
        marginRight: 10,
    }
});
