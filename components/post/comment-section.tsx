// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TextInput, View } from 'react-native';

// components
import { IconButton } from '../icon-button';

// prop types
type CommentSectionProps = {
	comments: string[];
	inputRef: React.RefObject<TextInput>;
};

// component
export function CommentSection(props: CommentSectionProps) {
	const [comment, setComment] = React.useState('');
	const [comments, setComments] = React.useState(props.comments);

	const handleSubmitComment = () => {
		setComments([comment, ...comments]);
		setComment('');
	};

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					multiline
					value={comment}
					onChangeText={(text) => setComment(text)}
					ref={props.inputRef}
					placeholder="comment..."
					style={styles.input}
				/>

				<IconButton
					icon="arrow-right"
					onPress={handleSubmitComment}
					style={styles.inputButton}
					disabled={comment === ''}
				/>
			</View>

			<View style={styles.commentsContainer}>
				{comments.map((comment: string, index: number) => (
					<View key={index} style={styles.comment}>
						<Text>{comment}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		marginHorizontal: 12,
	},

	inputContainer: {
		marginHorizontal: 12,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},

	input: {
		flex: 1,
		borderColor: 'lightgrey',
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 12,
	},

	inputButton: {
		marginLeft: 'auto',
	},

	commentsContainer: {
		marginHorizontal: 12,
		display: 'flex',
		justifyContent: 'flex-start',
	},

	comment: {
		backgroundColor: '#f2f2f2',
		paddingVertical: 6,
		paddingHorizontal: 12,
		marginVertical: 6,
		borderRadius: 12,
		width: 'auto',
	},
});
