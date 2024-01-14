import axios from 'axios'
const baseUrl = 'https://opentdb.com/api.php?amount=10&type=multiple'

export const getQuestions = ({ category, difficulty }) => {
  return axios
    .get(`${baseUrl}&difficulty=${difficulty}&category=${category}`)
    .then((res) => res.data)
}

export const categories = [
  { label: 'General Knowledge', value: 9 },
  { label: 'Entertaiment: Music', value: 12 },
  { label: 'Science and Nature', value: 17 },
  { label: 'Sports', value: 21 },
  { label: 'Geography', value: 22 },
]

export const difficulty = ['easy', 'medium', 'hard']
