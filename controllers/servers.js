let exDB = [
    {id:'1', name: 'aws', status: 'work'},
    {id:'2', name: 'google', status: 'work'},
    {id:'3', name: 'yandex', status: 'work'},
    {id:'4', name: 'microsoft', status: 'work'},
    {id:'5', name: 'yahoo', status: 'work'},
]

export const getall = (req, res)=>
    {
    res.send('<pre>')
    res.json(exDB)
    res.send('</pre>')
    }