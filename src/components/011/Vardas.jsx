import seaPlaners from "./SeaPla";

function Name() {
    seaPlaners.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    return seaPlaners.map((a, b) => <div key={b}>{a.id} {a.name}</div>)
}

export default Name;