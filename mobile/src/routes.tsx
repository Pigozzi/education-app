import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';

import Landing from './pages/Landing';

import AdministratorCreate from './pages/Create/Administrator';

import StudentLogin from './pages/Login/Student';
import TeacherLogin from './pages/Login/Teacher';
import AdministratorLogin from './pages/Login/Administrator';

import StudentCreate from './pages/Create/Student';
import TeacherCreate from './pages/Create/Teacher';

import AdministratorPanel from './pages/Panel/Administrator';
import StudentPanel from './pages/Panel/StudentPanel';
import TeacherPanel from './pages/Panel/TeacherPanel';
import SchoolCreate from './pages/Create/School';

import StudentInteraction from './pages/Panel/Options/StudentInteraction';
import AcceptTeacher from './pages/Panel/Options/AcceptTeacher';
import StudentList from './pages/Panel/Options/StudentList';
import TeacherList from './pages/Panel/Options/TeacherList';

import EditStudent from './pages/Panel/Options/Edit/EditStudent';
import EditTeacher from './pages/Panel/Options/Edit/EditTeacher';

import StudentForm from './pages/StudentForm';
import StudentMessage from './pages/StudentMessage';
import TeacherChoice from './pages/Panel/TeacherChoice';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                <Screen
                    name="Landing"
                    component={Landing}
                />

                {/* LOGIN */}
                <Screen
                    name="studentLogin"
                    component={StudentLogin}
                />
                <Screen
                    name="teacherLogin"
                    component={TeacherLogin}
                />

                <Screen
                    name="AdministratorLogin"
                    component={AdministratorLogin}
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

                <Screen
                    name="AdministratorCreate"
                    component={AdministratorCreate}
                />

                {/* PANEL */}

                <Screen
                    name="AdministratorPanel"
                    component={AdministratorPanel}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Panel Administrator" />
                    }}
                />

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
                        header: () => <Header title="Panel List" />
                    }}
                />

                <Screen
                    name="studentInteractions"
                    component={StudentInteraction}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Student Interactions" />
                    }}
                />

                <Screen
                    name="acceptTeacher"
                    component={AcceptTeacher}
                    options={{
                        headerShown: true,
                        header: () => <Header title="New Teacher List" />
                    }}
                />

                <Screen
                    name="studentList"
                    component={StudentList}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Student List" />
                    }}
                />

                <Screen
                    name="teacherList"
                    component={TeacherList}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Teacher List" />
                    }}
                />

                <Screen
                    name="editStudent"
                    component={EditStudent}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Edit Student" />
                    }}
                />

                <Screen
                    name="editTeacher"
                    component={EditTeacher}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Edit Teacher" />
                    }}
                />

                <Screen
                    name="TeacherChoice"
                    component={TeacherChoice}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Teacher Choice " />
                    }}
                />

                <Screen
                    name="SchoolCreate"
                    component={SchoolCreate}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Create new School" />
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