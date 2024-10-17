import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AuthComponent from "@/components/auth/AuthComponent";
import React from "react";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleDashboard = () => {
    // code to handle the browse action
    (navigation as any).navigate("dashboard");
  };

  const handleSignIn = () => {
    (navigation as any).navigate("auth");
  };

  const testRoute = () => {
    (navigation as any).navigate("test");
  };

  return (
    <View style={styles.container}>
      {/* Two Text Messages */}
      <Text style={styles.headerText}>WELCOME TO </Text>
      <Text style={styles.subText}> THE PAPUA NEW GUINEA NATIONAL POPULATION CENSUS
        
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => handleDashboard()}>
        <Text style={styles.buttonText}>CITIZEN'S DETAIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => handleSignIn()}
      >
        <Text style={styles.buttonText}>INTERVIEWER'S DETAIL</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styling for a modern, attractive layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffcc99", // Light background for contrast against buttons
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003300",
    textAlign: "center",
    marginBottom: 40, // Space between text and buttons
  },
  button: {
    backgroundColor: "#ffa64d", // Atomic Tangerine color
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonSecondary: {
    backgroundColor: "#ff751a", // Pumpkin for Interviewer's detail buttons
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  buttonText: {
    color: "#666699",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
