// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// context
const instagramPalette: string[] = ['#962fbf', '#d62976', '#fa7e1e', '#feda75'];

// prop types
type IconButtonProps = {
	image: string;
	style?: any;
};

// component
export function Avatar(props: IconButtonProps) {
	return (
		<LinearGradient colors={instagramPalette} style={[styles.container, props.style]}>
			<Image style={styles.image} source={{ uri: props.image }} />
		</LinearGradient>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		height: 48,
		width: 48,
		padding: 2,
		borderRadius: 24,
	},

	image: {
		height: '100%',
		borderRadius: 24,
		borderColor: 'white',
		borderWidth: 2,
	},
});
