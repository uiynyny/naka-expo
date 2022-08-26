import { Dimensions, Modal, Text, TouchableOpacity, View, TextInput } from "react-native";
import { Divider } from "react-native-elements";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteContent } from "../actions/content"
import { createReport } from '../actions/support'
import { create } from "react-test-renderer";

export const ExtraOptions = ({ visible, setVisible, username, postId }) => {

    const curUser = useSelector(s => s.user.username)
    const [reportContent, setContent] = useState(null);
    const [report, setReport] = useState('')

    return (<View>
        <Modal
            animationType={'none'}
            transparent={true}
            visible={visible}
        >
            <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                backgroundColor: '#555555dd',
                padding: 20,
            }} />
            <Modal animationType={'slide'} transparent={true} visible={visible}>
                <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
                    {reportContent ?
                        <View style={{ width: Dimensions.get('screen').width, paddingHorizontal: 10, paddingBottom: 30 }}>
                            <View style={{
                                backgroundColor: '#fff',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                paddingVertical: 20,
                                alignItems: 'center'
                            }}>
                                <Text style={{ marginBottom: 10 }}>{reportContent}</Text>
                                <TextInput style={{
                                    backgroundColor: '#eeeeee',
                                    height: 40,
                                    width: Dimensions.get('screen').width * 0.7,
                                    padding: 10,
                                    marginHorizontal: 10,
                                    borderRadius: 10
                                }} onChangeText={t => setReport(t)} />
                            </View>
                            <Divider style={{ backgroundColor: '#000' }} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    paddingVertical: 15,
                                }}
                                onPress={() => {
                                    setVisible(false)
                                    alert("report successfully")
                                    setContent(null)
                                    createReport(postId, curUser, report)
                                }}>
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: '#1a66ff' }}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    paddingVertical: 15,
                                }}
                                onPress={() => {
                                    setVisible(false)
                                    setContent(null)
                                }}>
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'red' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View> :
                        <View style={{ width: Dimensions.get('screen').width, paddingHorizontal: 10, paddingBottom: 30 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                    paddingVertical: 15,
                                }}
                                onPress={() => {
                                    // setVisible(false);
                                    if (username === curUser) {
                                        deleteContent(postId).then(res => {
                                            if (res.ok) {
                                                alert("content deleted")
                                                setVisible(false)
                                            }
                                        });
                                    } else {
                                        setContent("Reason for reporting?");
                                    }
                                }}>
                                <Text style={{ alignSelf: 'center', fontSize: 22, color: 'red' }}>{username === curUser ? "Delete" : "Report"}</Text>
                            </TouchableOpacity>
                            <Divider style={{ backgroundColor: '#000' }} />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    paddingVertical: 15,
                                }}
                                onPress={() => setVisible(false)}>
                                <Text style={{ alignSelf: 'center', fontSize: 22 }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
            </Modal>
        </Modal>
    </View>)
}