
export function NameInput() {
    return <>
        <div className="form-group text-left">
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter first name" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </div>
        </div>
    </>
}