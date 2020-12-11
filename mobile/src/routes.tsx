import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';

import StudentLogin from './pages/Login/StudentLogin';
import TeacherLogin from './pages/Login/TeacherLogin';

import StudentCreate from './pages/Create/StudentCreate';
import TeacherCreate from './pages/Create/TeacherCreate';

import StudentPanel from './pages/Panel/StudentPanel';
import TeacherPanel from './pages/Panel/TeacherPanel';

import StudentForm from './pages/StudentForm';
import StudentMessage from './pages/StudentMessage';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                {/* LOGIN */}
                <Screen
                    name="studentLogin"
                    component={StudentLogin}
                />
                <Screen
                    name="teacherLogin"
                    component={TeacherLogin}
                />

                {/* CREATE */}
                <Screen
                    name="studentCreate"
                    component={StudentCreate}
                />
                <Screen
                    name="teacherCreate"
                    component={TeacherCreate}
                />

                {/* PANEL */}

                <Screen
                    name="studentPanel"
                    component={StudentPanel}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Message History" />
                    }}
                />
                <Screen
                    name="teacherPanel"
                    component={TeacherPanel}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Student Interactions" />
                    }}
                />

                {/* OTHER ROUTES */}
                <Screen
                    name="studentForm"
                    component={StudentForm}
                />
                <Screen
                    name="studentMessage"
                    component={StudentMessage}
                />
            </Navigator>
        </NavigationContainer>
    )
}