import React,{ useState } from "react"
import { TextInput,StyleSheet,View,Button } from "react-native"


function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
       props.onAddGoal(enteredGoalText)
       setEnteredGoalText('')
      }

    return (
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.textInput}
                placeholder='Your course goal'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add goal' onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBlockEndColor: '#cccccc'
    },
});

export default GoalInput