
export type FilmCard = {
  _id: String
  year: String
  place: String
  photoCover: Number
}
export type Film = {
  _id: String,
  description: String,
  size: Number,
  year: String,
  place: String,
  tags: Array<Object>,
  photoCover: Number,
  photos:Array<Object>
}
export type Photo={
  title:String
  index: Number
  _id: String
  film:Number
  description: String
  relevance:Number  
}