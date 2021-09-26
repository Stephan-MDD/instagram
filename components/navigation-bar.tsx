// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View } from 'react-native';

// components
import { IconButton } from './icon-button';

// component
export function NavigationBar() {
	return (
		<View style={styles.container}>
			<IconButton icon="home" onPress={() => alert('open home')} />
			<IconButton icon="search" onPress={() => alert('open search')} />
			<IconButton icon="plus-square" onPress={() => alert('open create')} />
			<IconButton icon="heart" onPress={() => alert('open likes')} />
			<IconButton icon="user" onPress={() => alert('open profile')} />
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		padding: 12,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderTopColor: 'lightgrey',
		borderTopWidth: 1,
	},
});
