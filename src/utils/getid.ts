export default function* getID(init: number = 0): Generator<number, number, number> {
    let id = init
    while (true) {
        id++
        console.log('getID yield id', id)
        yield id
    }
}
