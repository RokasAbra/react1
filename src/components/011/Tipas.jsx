import seaPlaners from "./SeaPla";

function Type() {
    seaPlaners.sort((a, b) => {
        if (a.type < b.type) {
            return -1;
        }
        if (a.type > b.type) {
            return 1;
        }
        return 0;
    });
    return seaPlaners.map((a, b) => <div key={b}>{a.id} {a.type} </div>)
}

export default Type;