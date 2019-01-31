const { Component } = window.wp.element

const SOLID = 'fas'

const icons = {
  coffee: {
    styles: [ SOLID ],
    unicode: String.fromCharCode(parseInt('f0f4', 16))
  },
  star: {
    styles: [ SOLID ],
    unicode: String.fromCharCode(parseInt('f005', 16))
  },
  bath: {
    styles: [ SOLID ],
    unicode: String.fromCharCode(parseInt('f2cd', 16))
  },
  chair: {
    styles: [ SOLID ],
    unicode: String.fromCharCode(parseInt('f6c0', 16))
  }
}

const className = 'font-awesome-icon-chooser'

export default class FontAwesomeIconChooser extends Component {

  render(){
    const { handleSelect } = this.props

    return <div className={className}>
        <ul className={'icons'}>
          {
            Object.keys(icons).map((icon, iconIndex) =>
              icons[icon].styles.map((prefix, prefixIndex) =>
                <li onClick={() => handleSelect({ prefix, icon, unicode: icons[icon].unicode })} key={ `${ iconIndex }-${ prefixIndex }`}>
                  <i className={`${ prefix } fa-${ icon } `}></i>
                </li>
              )
            )
          }
        </ul>
    </div>
  }
}

