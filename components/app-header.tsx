// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image, View } from 'react-native';

// components
import { IconButton } from './icon-button';

// context
const logoUri =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png';

// component
export function AppHeader() {
	return (
		<View style={styles.container}>
			<IconButton icon="instagram" onPress={() => alert('open camera')} />
			<View style={styles.logoContainer}>
				<Image source={{ uri: logoUri }} style={styles.logo} />
			</View>
			<IconButton icon="paper-plane" onPress={() => alert('open messages')} />
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
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1,
	},

	logoContainer: {
		flex: 1,
	},

	logo: {
		flex: 1,
		resizeMode: 'contain',
	},
});
