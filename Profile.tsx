import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.divider}/>
        <View  style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
        </View>
        <Text style={styles.name} >Shivam </Text>
        <Text style={styles.email}>shivam@example.com</Text>
{/* divider */}
        <View style={styles.divider}/>
        {/* info  */}
        <View style={styles.row}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>Mobile App Developer</Text>
        </View>

        <View style={styles.row}>
             <Text style={styles.label}>Technology</Text>
             <Text style={styles.value}>React Native</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>Learning</Text>

        </View>
        {/* logoutbtn */}
        <Pressable style={styles.logoutBtn}
        onPress={()=>router.replace("/Login")}>
            <Text style={styles.logoutText}>Logout</Text>
        </Pressable>

    
      </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        alignItems:"center",
        padding:16,
    },
    header:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:24,
    },
    avatar:{
          width:90,
          height:90,
          borderRadius:45,
          backgroundColor:"#4f8cff",
          justifyContent:"center",
          alignItems:"center",
          marginBottom:12,
    },
    avatarText:{
        color:"#fff",
        fontSize:36,
        fontWeight:"bold",
    },
    name:{
        fontSize:18,
        fontWeight:"bold"
    },
    email:{
        fontSize:14,
        color:"#777",
        marginBottom:24,
    },
    divider:{
        width:"100%",
        height:1,
        backgroundColor:"#e5e5e5",
        marginVertical:16,
    },
    row:{
        width:"100%",
         flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom:12,
    },
    label:{
        fontSize:15,
        fontWeight:"500"
    },
    value:{
        fontSize:15,
        fontWeight:"500"
    },
    logoutBtn:{
        marginTop:40,
        backgroundColor:"#ef4444",
        paddingVertical:12,
        paddingHorizontal:40,
        borderRadius:8, 
    },
    logoutText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"600"
    }


})
