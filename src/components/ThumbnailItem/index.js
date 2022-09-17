// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {toChangeImage, details, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = details

  const onClickImage = () => {
    toChangeImage(id)
  }

  const isActiveImg = isActive ? '' : 'im'

  return (
    <li className={`imgItem ${isActiveImg}`}>
      <button className="b" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="imgg"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
