import { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet, FlatList } from "react-native";



export default function Juros(){

    const [ valor, setValor ] = useState("")
    const [ meses, setMeses] = useState("")
    const [ juros, setJuros] = useState("")
    const [ resultado, setResultado ] = useState([])


    function calcularJuros(){
        let valorNum = parseInt(valor)
        let valorMeses = parseInt(meses)
        let valorJuros = parseInt(juros)

        let resul = valorNum + (valorNum * (valorJuros / 100) * valorMeses)

        let resultadoJuros = []

        resultadoJuros.push(resul)

        setResultado(resultadoJuros)
        setValor('')
        setMeses('')
        setJuros('')
    }
    
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Valor</Text>
            <TextInput
                style={styles.input}
                placeholder="Valor"
                onChangeText={(valor) => setValor(valor)}
            />
            
            <Text style={styles.text}>Número de Meses</Text>
            <TextInput
                style={styles.input}
                placeholder="Meses"
                onChangeText={(meses) => setMeses(meses)}
            />
            <Text style={styles.text}>Taxa de Juros (%)</Text>
            <TextInput
                style={styles.input}
                placeholder="Juros"
                onChangeText={(juros) => setJuros(juros)}
            />
            <Button
                style={styles.button}
                title="Calcular"
                onPress={calcularJuros}
            />
            <FlatList 
                data={resultado}
                renderItem={({ item }) => (
                    <View>
                        <Text>
                            Juros Simples
                        </Text>
                        <Text>
                            {`${item}`}
                        </Text>
                    </View>
                )}
                keyExtractor={( item, index ) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        // flex: 1,
        borderWidth: 1,
        height: 30,
        paddingHorizontal: 10,
    },
    inputContainer: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        padding: 10,
        marginTop: 70,
    },
    text: {
        fontSize: 18,
    },
    button: {
        backgroundColor: 'steelBlue',
        color: 'white',
        marginLeft: 10,
        height: 10,
        textAlignVertical: 'center',
        textAlign: 'center',
        padding: 3,
        fontSize: 18,
    },
})