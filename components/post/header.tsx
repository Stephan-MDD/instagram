// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';

// components
import { IconButton } from '../icon-button';
import { Avatar } from '../avatar';

// prop types
type PostHeaderProps = {
	username: string;
	avatar: string;
};

// component
export function PostHeader(props: PostHeaderProps) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.profile} onPress={() => alert(`open ${props.username} profile`)}>
				<Avatar image={props.avatar} style={styles.avatar} />
				<Text style={styles.text}>{props.username}</Text>
			</TouchableOpacity>
			<IconButton icon="ellipsis-h" onPress={() => alert('open menu')} style={styles.menuButton} size={18} />
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		margin: 12,
	},

	profile: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},

	avatar: {
		marginRight: 12,
	},

	text: {
		fontWeight: 'bold',
	},

	menuButton: {
		marginLeft: 'auto',
	},
});
