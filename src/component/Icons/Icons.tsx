import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 interface IconInterface {
  name: string;
  size: number;
  color: string;
}

//declare icons
export const AntDesignIcon = ({name, size, color}: IconInterface) => (
  <AntDesign name={name} size={size} color={color} />
);
export const MaterialCommunityIcon = ({name, size, color}: IconInterface) => (
  <MaterialCommunityIcons name={name} size={size} color={color} />
);
export const IonIcon = ({name, size, color}: IconInterface) => (
  <Ionicons name={name} size={size} color={color} />
);
export const Material = ({name, size, color}: IconInterface) => (
  <MaterialIcons name={name} color={color} size={size} />
);
export const Evil = ({name, size, color}: IconInterface) => (
  <EvilIcons name={name} size={size} color={color} />
);
export const EntypoIcons = ({name, size, color}: IconInterface) => (
  <Entypo name={name} size={size} color={color} />
);
export const FontAwesomeIcon = ({name, size, color}: IconInterface) => (
  <FontAwesome5 name={name} size={size} color={color} />
);
export const FontIcon = ({name, size, color}: IconInterface) => (
  <FontAwesome name={name} size={size} color={color} />
);
export const OctIcon = ({name, size, color}: IconInterface) => (
  <Octicons name={name} color={color} size={size} />
);
