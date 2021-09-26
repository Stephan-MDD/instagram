// libraries
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Keyboard } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { View } from 'react-native';
import Constant from 'expo-constants';

// components
import { Post } from './components/post';
import { AppHeader } from './components/app-header';
import { ImageView } from './components/image-view';
import { NavigationBar } from './components/navigation-bar';

// context
import { posts } from './context/posts';

export default function App() {
	const [image, setImage] = React.useState('');
	const [keyboardHidden, setKeyboardHidden] = React.useState(true);

	React.useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => setKeyboardHidden(false));
		Keyboard.addListener('keyboardDidHide', () => setKeyboardHidden(true));

		return () => {
			Keyboard.removeListener('keyboardDidShow', () => setKeyboardHidden(false));
			Keyboard.removeListener('keyboardDidHide', () => setKeyboardHidden(true));
		};
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="dark" />
			<AppHeader />

			<ScrollView snapToAlignment="start">
				{posts.map((post: any, index: number) => (
					<Post key={index} setImage={setImage} {...post} />
				))}
			</ScrollView>

			{keyboardHidden && <NavigationBar />}

			<ImageView source={image} handleClose={() => setImage('')} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fcfcfc',
		alignItems: 'stretch',
		justifyContent: 'space-between',
		paddingTop: Constant.statusBarHeight,
	},

	scrollContainer: {
		display: 'flex',
		flex: 1,
	},
});
