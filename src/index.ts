type Primitive = string | number | boolean | null

type JSONObject  = { [k:string]: JSONValue }
type JSONArray =   JSONValue[]
type JSONValue = Primitive | JSONArray | JSONObject


function isJSON(arg: JSONValue){}



isJSON("hello")


isJSON([3, 3, 5, 5])
isJSON(false)
isJSON(true)
isJSON(4)
isJSON({a : { f :4}})

isJSON(()=>{})






