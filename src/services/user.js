import { firebase } from '../config/firebase'

const getList = async () => {
    try {
        const db = firebase.firestore()
        const res = await db.collection('users').get()
        const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return data
    } catch (error) {
        console.log("Error al obtener los usuarios", error)
    }
}

const save = async (user) => {
    console.log("Guardando usuario", user)
    try {
        const db = firebase.firestore()
        await db.collection('users').add(user)
        return true
    } catch (error) {
        console.log("Error al guardar el usuario", error)
    }
}

const remove = async (id) => {
    try {
        const db = firebase.firestore()
        await db.collection('users').doc(id).delete()
        return true
    } catch (error) {
        console.log("Error al eliminar usuario", error)
    }
}

const update = async (id, data) => {
    try {
        const db = firebase.firestore()
        await db.collection('users').doc(id).update(data)
        return true
    } catch (error) {
        console.log("Error al actualizar usuario", error)
    }
}

export { getList, save, remove, update }