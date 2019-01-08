( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	const registerBlockType = wp.blocks.registerBlockType
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	const el = wp.element.createElement
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	const __ = wp.i18n.__

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'font-awesome/font-awesome', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'Font Awesome Icon' ),

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

    icon: el(
      'svg',
      {
        className: "svg-inline--fa fa-font-awesome fa-w-14",
        ariaHidden: "true",
        viewBox: "0 0 448 512",

      },
      el(
        'path',
        {
          fill: "currentColor",
          d: "M397.8 32H50.2C22.7 32 0 54.7 0 82.2v347.6C0 457.3 22.7 480 50.2 480h347.6c27.5 0 50.2-22.7 50.2-50.2V82.2c0-27.5-22.7-50.2-50.2-50.2zm-45.4 284.3c0 4.2-3.6 6-7.8 7.8-16.7 7.2-34.6 13.7-53.8 13.7-26.9 0-39.4-16.7-71.7-16.7-23.3 0-47.8 8.4-67.5 17.3-1.2.6-2.4.6-3.6 1.2V385c0 1.8 0 3.6-.6 4.8v1.2c-2.4 8.4-10.2 14.3-19.1 14.3-11.3 0-20.3-9-20.3-20.3V166.4c-7.8-6-13.1-15.5-13.1-26.3 0-18.5 14.9-33.5 33.5-33.5 18.5 0 33.5 14.9 33.5 33.5 0 10.8-4.8 20.3-13.1 26.3v18.5c1.8-.6 3.6-1.2 5.4-2.4 18.5-7.8 40.6-14.3 61.5-14.3 22.7 0 40.6 6 60.9 13.7 4.2 1.8 8.4 2.4 13.1 2.4 22.7 0 47.8-16.1 53.8-16.1 4.8 0 9 3.6 9 7.8v140.3z"
        },
        null
      )
    ),

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},

    attributes: {
		  prefix: {
        type: 'string',
        source: 'attribute',
        selector: 'i',
        attribute: 'prefix'
      },
		  icon: {
		    type: 'string',
        source: 'attribute',
        selector: 'i',
        attribute: 'icon'
      }
    },

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: ( { className, setAttributes, isSelected, attributes } ) => {
		  const defaultPrefix = 'fas'

      const handleSelect = icon => {
        setAttributes({
          icon,
          prefix: defaultPrefix
        })
      }

      const icons = [
        'coffee',
        'star',
        'angry',
        'bath',
        'bell',
        'bowling-ball',
        'broom',
        'brain',
        'chair',
        'clock',
        'exclamation',
        'eye-dropper'
      ]

      return isSelected
          ? <div className={className}>
              <ul className={'icons'}>
                {
                  icons.map((icon, index) =>
                    <li onClick={() => handleSelect(icon)} key={index}>
                      <i className={`${ defaultPrefix } fa-${ icon }`}></i>
                    </li>
                  )
                }
              </ul>
            </div>
        : <span><i className={`${ attributes.prefix } fa-${ attributes.icon }`}></i></span>
    },

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: ({ attributes: { icon, prefix } }) => {
      return <i className={`${ prefix } fa-${ icon }`} icon={ icon } prefix={ prefix }></i>
		}
	})
} )(
	window.wp
)
