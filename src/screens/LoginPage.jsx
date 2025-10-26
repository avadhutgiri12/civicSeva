import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const LoginPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        {/* Logo */}
        <Image
          source={require('../assets/civicseva_logo.png')} // 👈 replace with your image path
          style={styles.logo}
          resizeMode="contain"
        />
        {/* App Name */}
        <Text style={styles.appName}>
          Civic<Text style={{ color: '#0056d6' }}>Seva</Text>
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.shadowBox}>
            <View style={styles.innerBox}>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#999"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.shadowBox}>
            <View style={styles.innerBox}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
          
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={{ color: '#333' }}>Don’t have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>or</Text>

        {/* Social Login Buttons */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/google.png')} // add Google icon to assets
            style={styles.socialIcon}
          />
          <Text style={[styles.socialText, { color: 'black' }]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleButton}>
          <Image
            source={require('../assets/apple.png')} // add Apple icon to assets
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Sign in with Apple</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.footerText}>Your Issues, Our Solutions!</Text>
          <TouchableOpacity style={styles.reportButton}>
            <Text style={styles.reportText}>Start Reporting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: '#0161b7',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: '30%',
    borderRadius: 24,
  },
  logo: {
    width: 140,
    height: 140,
    marginTop: '-20%',
  },
  appName: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3a3a3a',
    marginVertical: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    gap:10
  },
  shadowBox: {
    width: '90%',
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
    shadowColor: '#fff',
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#0161b7',
  },
  innerBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 9,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: 2,
  },
  input: {
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 25,
    color: '#0056d6',
    marginTop: 8,
    fontSize: 14,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#0161b7',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  signupText: {
    color: '#0056d6',
    fontWeight: '600',
  },
  orText: {
    marginVertical: 10,
    color: '#777',
  },
  googleButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#ecf0f3',
    marginTop: 8,
  },
  appleButton: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#000',
    marginTop: 8,
  },
  socialIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    color: '#0056d6',
    fontWeight: '700',
    fontSize: 16,
  },
  reportButton: {
    marginTop: 8,
    backgroundColor: '#eaf1ff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  reportText: {
    color: '#0056d6',
    fontWeight: '600',
    fontSize: 16,
  },
});

