const NameCard = () => {
    const genderData = {
        "name": "peter",
        "gender": "male",
        "probability": 0.99,
        "count": 165452
    }

    const ageData = { "name": "peter", "age": 59, "count": 151057 }

    const nationalityData = { "name": "peter", "country": [{ "country_id": "SK", "probability": 0.1245678651196634 }, { "country_id": "AU", "probability": 0.04147520566025031 }, { "country_id": "KE", "probability": 0.04107488447822492 }] }

    const name = genderData.name.charAt(0).toUpperCase() + genderData.name.slice(1);

    return <>
        <div className="card mt-3">
            <div className="card-body">
                <h3>{name}</h3>
                <p className="mb-1">Gender: {genderData.gender}</p>
                <p className="mb-1">Nationality: {nationalityData.country.map(c => c.country_id).join(', ')}</p>
                <p className="mb-1">Age: {ageData.age}</p>
            </div>
        </div>
    </>
}
export default NameCard