// libraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// prop types
type IconButtonProps = {
	onPress: () => void;
	icon: string;
	style?: any;
	color?: string | boolean;
	size?: number;
	toggle?: boolean;
	disabled?: boolean;
};

// component
export function IconButton(props: IconButtonProps) {
	const [active, setActive] = React.useState(false);

	function handlePress() {
		if (props.toggle) setActive(!active);
		props.onPress();
	}

	return (
		<TouchableOpacity style={[styles.container, props.style]} onPress={handlePress} disabled={props.disabled}>
			<FontAwesome5
				name={props.icon}
				size={props.size ?? 22}
				solid={active}
				style={[styles.icon, props.color && { color: props.color }, props.disabled && { opacity: 0.4 }]}
			/>
		</TouchableOpacity>
	);
}

// styles
const styles = StyleSheet.create({
	container: {
		padding: 12,
	},

	icon: {
		color: 'grey',
	},
});
