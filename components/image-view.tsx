// libraries
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';

// prop types
type ImageViewProps = {
	source: string;
	handleClose: () => void;
};

// component
export function ImageView(props: ImageViewProps) {
	if (!props.source) return null;

	return (
		<TouchableOpacity style={styles.container} onPress={props.handleClose}>
			<Image source={{ uri: props.source }} style={styles.image} />
		</TouchableOpacity>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: 'black',
		height: Dimensions.get('screen').height,
		width: '100%',
	},

	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});
