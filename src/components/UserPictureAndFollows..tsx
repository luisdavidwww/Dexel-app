import React from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity,} from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"


declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}

export default function UserPictureAndFollows(props: any) {

  const { user } = props;


  function SvgProfilePicture() {
    return (
      <Svg
        width={88}
        height={88}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M86.667 44c0 23.611-19.122 42.75-42.708 42.75C20.372 86.75 1.25 67.611 1.25 44S20.372 1.25 43.959 1.25c23.586 0 42.708 19.139 42.708 42.75z"
          stroke="url(#prefix__paint0_linear_279_663)"
          strokeWidth={2.5}
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear_279_663"
            x1={43.959}
            y1={0}
            x2={43.959}
            y2={88}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#DE0046" />
            <Stop offset={1} stopColor="#F7A34B" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }
        return (
          <View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.containerPicture}>
                <SvgProfilePicture />
                <Image
                    style={styles.userPicture}
                    source={{uri: user.profilePicture}}
                />                
              </TouchableOpacity>
            </View>

            <View style={styles.container}>
              <View style={styles.UserName}>
                <Text style={styles.textBold}>{user.username}</Text>             
              </View>
            </View> 

            <View style={styles.container}>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.posts}</Text>
                <Text>Post</Text>                
              </View>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.follers}</Text>
                <Text>Followers</Text>               
              </View>
              <View style={styles.followsContainer}>
                <Text style={styles.textBold}>{user.following}</Text>
                <Text>Following</Text>             
              </View>
            </View>         
        </View>
        
        )

}

const styles = StyleSheet.create({
    userPicture: {
        width: 77,
        height: 77,
        borderRadius: 100,
        marginRight: 10,
        position: 'absolute',
        alignSelf: 'center',
        top: 5,
    },
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    containerPicture: {
      marginTop: 10,
  },
    followsContainer: {
        alignContent: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingTop: 8,
    }, 
    textBold: {
        fontWeight: "bold",
        textAlign: "center",
    },
    UserName: {
      fontSize: 15,
      fontWeight: "normal",
      paddingTop: 8,
    }
})
