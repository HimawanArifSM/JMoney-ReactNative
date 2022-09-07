import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from '../styles/global.js';
import Input from '../components/Input.js';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {register} from '../redux/actions/auth';
import {resetmsg} from '../redux/reducers/auth';

const registerSchema = Yup.object().shape({
  username: Yup.string().min(5).required('Required'),
  email: Yup.string().email('Invalid Email Format').required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const FormRegister = (errors, handleChange, handleSubmit) => {
  return (
    <>
      <View style={[styles.inputWrapper, styles.marB]}>
        <Input
          onChange={handleChange}
          placeholder="Username"
          icon="user"
          type="text"
          name="username"
        />
      </View>
      <View style={[styles.inputWrapper, styles.marB]}>
        <Input
          onChange={handleChange}
          placeholder="Email"
          icon="envelope"
          type="email-address"
          name="email"
        />
      </View>
      <View style={[styles.inputWrapper, styles.marB]}>
        <Input
          onChange={handleChange}
          placeholder="Password"
          icon="lock"
          secure={true}
          type="text"
          name="password"
        />
      </View>
      <View style={[styles.buttonWrapper, styles.padA]}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

function Register({navigation}) {
  const successmsg = useSelector(state => state.auth.successmsg);
  const dispatch = useDispatch();
  const onRegister = value => {
    const data = {
      username: value.username,
      email: value.email,
      password: value.password,
    };
    dispatch(register(data));
  };
  React.useEffect(() => {
    if (successmsg) {
      dispatch(resetmsg());
      navigation.navigate('Create PIN');
    }
  });
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.textMain}>J-Money</Text>
      </View>
      <ScrollView style={[styles.mainContent, styles.padA]}>
        <Text style={styles.textMain}>Sign Up</Text>
        <Text style={[styles.textSecondary, styles.marA]}>
          Create your account to access Zwallet.
        </Text>
        <Formik
          validationSchema={registerSchema}
          initialValues={{email: '', username: '', password: ''}}
          onSubmit={onRegister}>
          {props => <FormRegister {...props} />}
        </Formik>
        <Text style={[styles.textSecondary, styles.marA]}>
          Already have an account?
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.textSecondary, styles.colorPrim]}>
              Let's Login
            </Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </ScrollView>
  );
}

export default Register;

// import {View, Text, Alert, TouchableOpacity, ScrollView} from 'react-native';
// import React from 'react';
// import styles from '../styles/global.js';
// import Input from '../components/Input.js';

// function Register({navigation}) {
//   const [fullName, setFullName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const onSubmit = () => {
//     if (email === '' && password === '' && fullName === '') {
//       Alert.alert('Success', 'Register Success', [
//         {
//           text: 'OK',
//           onPress: () => {
//             navigation.navigate('Create Pin');
//           },
//         },
//       ]);
//     } else {
//       Alert.alert('Error', 'Wrong username or password');
//     }
//     // console.log('Hello from login')
//   };
//   return (
//     <ScrollView style={styles.wrapper}>
//       <View style={styles.header}>
//         <Text style={styles.textMain}>J-Money</Text>
//       </View>
//       <ScrollView style={[styles.mainContent, styles.padA]}>
//         <Text style={styles.textMain}>Sign Up</Text>
//         <Text style={[styles.textSecondary, styles.marA]}>
//           Create your account to access Zwallet.
//         </Text>
//         <View style={[styles.inputWrapper, styles.marB]}>
//           <Input
//             onChange={text => setFullName(text)}
//             placeholder="Full Name"
//             icon="user"
//             type="text"
//           />
//         </View>
//         <View style={[styles.inputWrapper, styles.marB]}>
//           <Input
//             onChange={text => setEmail(text)}
//             placeholder="Email"
//             icon="envelope"
//             type="email-address"
//           />
//         </View>
//         <View style={[styles.inputWrapper, styles.marB]}>
//           <Input
//             onChange={text => setPassword(text)}
//             placeholder="Password"
//             icon="lock"
//             secure={true}
//           />
//         </View>
//         <View style={[styles.buttonWrapper, styles.padA]}>
//           <TouchableOpacity onPress={onSubmit}>
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>Register</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <Text style={[styles.textSecondary, styles.marA]}>
//           Already have an account?
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={[styles.textSecondary, styles.colorPrim]}>
//               Let's Login
//             </Text>
//           </TouchableOpacity>
//         </Text>
//       </ScrollView>
//     </ScrollView>
//   );
// }

// export default Register;
