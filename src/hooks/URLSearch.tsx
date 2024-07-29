import React, { useState, useEffect } from 'react'

interface URLSearchProps {
  onSubmit: (url: string) => void
  inputClassName?: string
  placeholder?: string
  value: string // 추가된 부분
}

export const URLSearch: React.FC<URLSearchProps> = ({ onSubmit, inputClassName, placeholder = 'www.example.com', value }) => {
  const [url, setUrl] = useState(value)

  // value prop이 변경되면 url state도 업데이트
  useEffect(() => {
    setUrl(value)
  }, [value])

  const handleClickSubmit = () => {
    onSubmit(url)
    // setUrl('') // URL 제출 후 입력 필드 비우기 (이 줄을 주석 처리하거나 삭제)
  }

  return (
    <input
      type="text"
      value={url}
      onChange={({ target: { value } }) => setUrl(value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClickSubmit()
        }
      }}
      className={inputClassName}
      placeholder={placeholder}
    />
  )
}

export default URLSearch
