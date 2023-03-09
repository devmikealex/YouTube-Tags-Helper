export default function* getID(): Generator<number, number> {
    let id = 0
    while (true) {
        id++
        console.log('getID yield id', id)
        yield id
    }
}
