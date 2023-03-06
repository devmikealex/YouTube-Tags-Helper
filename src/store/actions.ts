export interface ActionRDX {
    type: string
}

export const TEST = 'TEST'
export function testAction(): ActionRDX {
    return {
        type: TEST,
    }
}
