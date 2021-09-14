import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
  memo,
  VFC,
  FormEventHandler
} from 'react'
import classnames from 'classnames'
import './index.scss'
import { BaseComponent } from '../types/utils'

type TextareaProps = Partial<{
  value: string
  placeholder: string
  editable: boolean
  onChange: FormEventHandler<HTMLDivElement>
  onFocus: FormEventHandler<HTMLDivElement>
  onBlur: FormEventHandler<HTMLDivElement>
}> &
  BaseComponent

export const Textarea: VFC<TextareaProps> = memo(
  forwardRef((props, ref) => {
    const { value, placeholder, editable = true, className } = props
    const { onChange, onFocus, onBlur } = props

    const [customValue, setValue] = useState(value || '')
    const [placeholderShow, setPlaceholderShow] = useState(!value)
    const inputDom = useRef<HTMLDivElement>()

    const customChange: FormEventHandler<HTMLDivElement> = useCallback((e) => {
      const text = (e.target as HTMLDivElement).innerText
      setValue(text)
      onChange?.(e)
    }, [])

    const customFocus = useCallback((e) => {
      setPlaceholderShow(false)
      onFocus?.(e)
    }, [])

    const customBlur = useCallback((e) => {
      if (
        !inputDom.current?.innerText ||
        inputDom.current?.innerText === '\n'
      ) {
        setPlaceholderShow(true)
      }
      onBlur?.(e)
      onChange?.(e)
    }, [])

    const customDomChange = useCallback((dom) => {
      inputDom.current = dom
    }, [])

    useImperativeHandle(ref, () => {
      return {
        el: inputDom.current
      }
    })

    useEffect(() => {
      if (inputDom.current) {
        inputDom.current.innerText = customValue
      }
    }, [inputDom.current, value])

    return (
      <div className={classnames('textarea', className)}>
        <div className="textarea-wrapper">
          {placeholderShow && (
            <div className="textarea-placeholder">{placeholder}</div>
          )}
          <div
            ref={customDomChange}
            className="textarea-input"
            contentEditable={editable}
            onFocus={customFocus}
            onBlur={customBlur}
            onInput={customChange}
          />
        </div>
      </div>
    )
  })
)
