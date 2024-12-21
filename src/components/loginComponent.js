import 'bootstrap/dist/css/bootstrap.min.css';


function LoginComponent() {
    return (
        <>
            <body className="bg-dark">
                <div class="container col-md-3 position-absolute top-50 start-50 translate-middle">
                    <div class="card text-bg-dark p-3 border border-white" >
                        <div class="card-body">

                            <form>
                                <div class="mb-3 mt-3">Purpose:</div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="purpose_radio" id="radioClient" />
                                    <label class="form-check-label" for="radioClient">
                                        Client
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="purpose_radio" id="radioGroup" />
                                    <label class="form-check-label" for="radioGroup">
                                        Group
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="purpose_radio" id="radioAgent" />
                                    <label class="form-check-label" for="radioAgent" >
                                        Agent
                                    </label>
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="exampleLabelInput" class="form-label">Label</label>
                                    <input name="example_label" type="email" class="form-control" id="exampleLabelInput" aria-describedby="labelHelp" />

                                    <div id="labelHelp" class="form-text text-secondary">Please write label to here.</div>
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="exampleKeyInput" class="form-label">Key</label>
                                    <input name="example_key" type="password" class="form-control" id="exampleKeyInput" aria-describedby="keyHelp" />
                                    <div id="keyHelp" class="form-text text-secondary">Please write key to here.</div>
                                </div>
                                <div class="mt-3 mb-3">Status</div>
                                <div class="form-check form-check-inline" >
                                    <input class="form-check-input" type="radio" name="status_radio" id="radioActive" />
                                    <label class="form-check-label" for="radioActive" >
                                        Active
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status_radio" id="radioPassive" />
                                    <label class="form-check-label" for="radioPassive">
                                        Passive
                                    </label>
                                </div>
                            </form>
                            <button type="button" class="btn btn-success mt-3 mb-3 col-12">Save</button>
                        </div>
                    </div>
                </div>
            </body>
        </>

    )
}



export default LoginComponent