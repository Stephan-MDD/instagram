// libraries
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

// components
import { IconButton } from '../icon-button';
import { PostHeader } from './header';
import { CommentSection } from './comment-section';

// prop types
type PostProps = {
	username: string;
	avatar: string;
	image: string;
	caption: string;
	comments: string[];
	setImage: (image: string) => void;
};

// component
export function Post(props: PostProps) {
	const [liked, setLiked] = React.useState(false);
	const commentInputRef = React.useRef<any>();

	const renderLikedText = () => {
		if (liked) return 'Liked by you';
		return 'Not liked yet - be the first!';
	};

	return (
		<View style={styles.container}>
			<PostHeader username={props.username} avatar={props.avatar} />

			<View>
				<TouchableWithoutFeedback onPress={() => props.setImage(props.image)}>
					<View style={styles.imageContainer}>
						<Image source={{ uri: props.image }} style={styles.image} />
					</View>
				</TouchableWithoutFeedback>
			</View>

			<View style={styles.imageInfoContainer}>
				<View style={styles.imageToolbar}>
					<IconButton icon="heart" toggle onPress={() => setLiked(!liked)} color={liked && 'tomato'} />
					<IconButton icon="comment" onPress={() => commentInputRef.current.focus()} />
					<IconButton icon="paper-plane" onPress={() => alert('Send message')} />
					<IconButton toggle icon="bookmark" onPress={() => {}} style={styles.bookmarkButton} />
				</View>

				<Text style={styles.likedText}>{renderLikedText()}</Text>
				<Text style={styles.caption}>{props.caption}</Text>
			</View>

			<CommentSection comments={props.comments} inputRef={commentInputRef} />
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderBottomColor: 'lightgrey',
		borderBottomWidth: 1,
		backgroundColor: '#fff',
		paddingVertical: 12,
	},

	imageContainer: {
		flex: 1,
		height: Dimensions.get('screen').height * 0.6,
		backgroundColor: '#F1F9FF',
	},

	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},

	imageToolbar: {
		display: 'flex',
		flexDirection: 'row',
	},

	imageInfoContainer: {
		margin: 12,
	},

	likedText: {
		marginLeft: 12,
	},

	caption: {
		margin: 12,
		fontWeight: 'bold',
	},

	bookmarkButton: {
		marginLeft: 'auto',
	},
});
