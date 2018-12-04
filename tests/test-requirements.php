<?php
/**
 * Class RequirementsTest
 *
 * @noinspection PhpCSValidationInspection
 */
// phpcs:ignoreFile Squiz.Commenting.ClassComment.Missing
// phpcs:ignoreFile Generic.Commenting.DocComment.MissingShort
require_once dirname( __FILE__ ) . '/../includes/class-fontawesome-activator.php';
require_once dirname( __FILE__ ) . '/_support/font-awesome-phpunit-util.php';

class RequirementsTest extends WP_UnitTestCase {

	/**
	 * Reset test state.
	 *
	 * @before
	 */
	protected function reset() {
		FontAwesome::reset();
		\FontAwesomePhpUnitUtil\Mock_FontAwesome_Releases::mock();
		wp_script_is( 'font-awesome-official', 'enqueued' ) && wp_dequeue_script( 'font-awesome-official' );
		wp_script_is( 'font-awesome-official-v4shim', 'enqueued' ) && wp_dequeue_script( 'font-awesome-official-v4shim' );
		wp_style_is( 'font-awesome-official', 'enqueued' ) && wp_dequeue_style( 'font-awesome-official' );
		wp_style_is( 'font-awesome-official-v4shim', 'enqueued' ) && wp_dequeue_style( 'font-awesome-official-v4shim' );
		FontAwesome_Activator::activate();
	}

	public function assert_defaults( $load_spec ) {
		$this->assertEquals( 'webfont', $load_spec['method'] );
		$this->assertTrue( $load_spec['v4shim'] );
		$this->assertTrue( $load_spec['pseudoElements'] );
	}

	public function test_all_default_with_single_client() {
		fa()->register(
			array(
				'name' => 'test',
				'clientVersion' => '1',
			)
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assert_defaults( $load_spec );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$load_spec = $fa_load->invoke( fa() );

		$this->assertEquals( $load_spec, fa()->load_spec() );
		$this->assertFalse( $failed );
		$this->assertTrue( $enqueued );
		$this->assertTrue( wp_style_is( 'font-awesome-official', 'enqueued' ) );
		$this->assertTrue( wp_style_is( 'font-awesome-official-v4shim', 'enqueued' ) );
	}

	public function test_all_default_with_multiple_clients() {
		fa()->register(
			array(
				'name' => 'Client A',
				'clientVersion' => '1',
			)
		);

		fa()->register(
			array(
				'name' => 'Client B',
				'clientVersion' => '1',
			)
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assert_defaults( $load_spec );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$load_spec = $fa_load->invoke( fa() );

		$this->assertEquals( $load_spec, fa()->load_spec() );
		$this->assertFalse( $failed );
		$this->assertTrue( $enqueued );
		$this->assertTrue( wp_style_is( 'font-awesome-official', 'enqueued' ) );
		$this->assertTrue( wp_style_is( 'font-awesome-official-v4shim', 'enqueued' ) );
	}

	public function test_register_without_name() {
		$this->expectException( InvalidArgumentException::class );

		fa()->register(
			array(
				'method' => 'svg',
				'v4shim' => 'require',
				'clientVersion' => '1',
			)
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$load_spec = $fa_load->invoke( fa() );

		$this->assertNull( $load_spec );
		// We don't expect either callback to be invoked because throwing the
		// InvalidArgumentException preempts further processing.
		$this->assertFalse( $failed );
		$this->assertFalse( $enqueued );
	}

	public function test_single_client_gets_what_it_wants() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'svg',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assertEquals( 'svg', $load_spec['method'] );
			$this->assertTrue( $load_spec['v4shim'] );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertTrue( $enqueued );
	}

	public function test_duplicate_client_registry() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'svg',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'svg',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assertEquals( 'svg', $load_spec['method'] );
			$this->assertTrue( $load_spec['v4shim'] );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertTrue( $enqueued );
		$registered_test_clients = array_filter(fa()->requirements(), function( $client ) { return 'test' === $client['name']; });
		$this->assertEquals( 1, count( $registered_test_clients ) );
	}

	public function test_two_compatible_clients() {
		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'   => 'clientA',
						'method' => 'svg',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'   => 'clientB',
						'method' => 'svg',
						'clientVersion' => '1',
					// leaves v4shim alone.
					)
				);
			}
		);

		add_action(
			'font_awesome_enqueued',
			function( $load_spec ) {
				$this->assertEquals( 'svg', $load_spec['method'] );
				$this->assertTrue( $load_spec['v4shim'] );
			}
		);
		global $fa_load;
		$fa_load->invoke( fa() );
	}

	public function test_incompatible_method() {
		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'   => 'clientA',
						'method' => 'svg',
						'clientVersion' => '1'
					)
				);

				fa()->register(
					array(
						'name'   => 'clientB',
						'method' => 'webfont', // not compatible with svg.
						'clientVersion' => '1'
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function( $data ) use ( &$failed ) {
			$failed = true;
			$this->assertEquals( 'method', $data['requirement'] );
			$this->assertTrue( $this->client_requirement_exists( 'clientB', $data['conflictingClientRequirements'] ) );
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;

		$this->assertNull( $fa_load->invoke( fa() ) );
		$this->assertNull( fa()->load_spec() );
		$this->assertTrue( $failed );
		$this->assertFalse( $enqueued );
		$this->assertNotNull( fa()->conflicts() );
	}

	public function test_pseudo_element_default_false_when_svg() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'svg',
						'clientVersion' => '1',
					)
				);
			}
		);

		add_action(
			'font_awesome_enqueued',
			function( $load_spec ) {
				$this->assertEquals( 'svg', $load_spec['method'] );
				$this->assertFalse( $load_spec['pseudoElements'] );
				$this->assertFalse( fa()->using_pseudo_elements() );
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
	}

	public function test_pseudo_element_default_true_when_webfont() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'webfont',
						'clientVersion' => '1',
					)
				);
			}
		);

		add_action(
			'font_awesome_enqueued',
			function( $load_spec ) {
				$this->assertEquals( 'webfont', $load_spec['method'] );
				$this->assertTrue( $load_spec['pseudoElements'] );
				$this->assertTrue( fa()->using_pseudo_elements() );
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
	}

	/**
	 * @group version
	 */
	public function test_incompatible_version() {
		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'    => 'clientA',
						'version' => '5.0.13',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientB',
						'version' => '5.0.12',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function( $data ) use ( &$failed ) {
			$failed = true;
			$this->assertEquals( 'version', $data['requirement'] );
			$this->assertTrue( $this->client_requirement_exists( 'clientB', $data['conflictingClientRequirements'] ) );
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;

		$this->assertNull( $fa_load->invoke( fa() ) );
		$this->assertTrue( $failed );
		$this->assertFalse( $enqueued );
	}

	public function client_requirement_exists( $name, $reqs ) {
		$found = false;
		foreach ( $reqs as $req ) {
			if ( $name === $req['name'] ) {
				$found = true;
				break;
			}
		}
		return $found;
	}

	/**
	 * @group version
	 */
	public function test_compatible_with_latest_version() {
		$stub = $this->createMock( FontAwesome::class );
		$stub->method( 'get_latest_version' )
		->willReturn( '5.0.13' );

		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'    => 'clientA',
						'version' => '~5.0.0',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientB',
						'version' => '>=5.0.12',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientC',
						'version' => '^5',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertFalse( $failed );
		$this->assertTrue( $enqueued );
	}

	/**
	 * @group version
	 */
	public function test_compatible_with_earlier_patch_level() {
		$stub = $this->createMock( FontAwesome::class );
		$stub->method( 'get_available_versions' )
		->willReturn(
			array(
				'5.1.0',
				'5.0.13',
				'5.0.12',
				'5.0.11',
				'5.0.10',
				'5.0.9',
				'5.0.0',
			)
		);
		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'    => 'clientA',
						'version' => '~5.0.0',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientB',
						'version' => '>=5.0.12',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientC',
						'version' => '^5',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertFalse( $failed );
		$this->assertTrue( $enqueued );
	}

	/**
	 * @group version
	 */
	public function test_compatible_with_earlier_minor_version() {
		$stub = $this->createMock( FontAwesome::class );
		$stub->method( 'get_available_versions' )
		->willReturn(
			array(
				'5.1.0',
				'5.0.13',
				'5.0.12',
				'5.0.11',
				'5.0.10',
				'5.0.9',
				'5.0.0',
			)
		);
		add_action(
			'font_awesome_requirements',
			function() {

				fa()->register(
					array(
						'name'    => 'clientA',
						'version' => '<=5.1',
						'clientVersion' => '1',
					)
				);

				fa()->register(
					array(
						'name'    => 'clientB',
						'version' => '>=5.0.10',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertFalse( $failed );
		$this->assertTrue( $enqueued );
	}

	/**
	 * @group pro
	 */
	public function test_pro_is_configured() {
		\FontAwesomePhpUnitUtil\mock_singleton_method(
			$this,
			FontAwesome::class,
			'is_pro_configured',
			function( $method ) {
				$method->willReturn( true );
			}
		);

		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name' => 'test',
						'clientVersion' => '1',
					)
				);
			}
		);

		add_action(
			'font_awesome_enqueued',
			function() {
				$this->assertTrue( fa()->using_pro() );
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
	}

	/**
	 * @group pro
	 */
	public function test_pro_not_configured() {
		\FontAwesomePhpUnitUtil\mock_singleton_method(
			$this,
			FontAwesome::class,
			'is_pro_configured',
			function( $method ) {
				$method->willReturn( false );
			}
		);

		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name' => 'test',
						'clientVersion' => '1',
					)
				);
			}
		);

		add_action(
			'font_awesome_enqueued',
			function() {
				$this->assertFalse( fa()->using_pro() );
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
	}

	/**
	 * @group shim
	 */
	public function test_shim_svg() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'test',
						'method' => 'svg',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertTrue( wp_script_is( 'font-awesome-official-v4shim', 'enqueued' ) );
	}

	/**
	 * One client requires v4shim. The other does not forbid, but also does not require it.
	 * Expected: Client A's requirement should be honored, since Client B does not forbid.
	 *
	 * @group shim
	 */
	public function test_shim_webfont() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'Client A',
						'method' => 'webfont',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
				fa()->register(
					array(
						'name'   => 'Client B',
						'method' => 'webfont',
						'clientVersion' => '1',
					)
				);
			}
		);

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertTrue( wp_style_is( 'font-awesome-official-v4shim', 'enqueued' ) );
	}

	/**
	 * @group shim
	 */
	public function test_shim_conflict() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'Client A',
						'method' => 'webfont',
						'v4shim' => 'require',
						'clientVersion' => '1',
					)
				);
				fa()->register(
					array(
						'name'   => 'Client B',
						'method' => 'webfont',
						'v4shim' => 'forbid',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function() use ( &$enqueued ) {
			$enqueued = true;
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function( $data ) use ( &$failed ) {
			$failed = true;
			$this->assertEquals( 'v4shim', $data['requirement'] );
			$this->assertTrue( $this->client_requirement_exists( 'Client B', $data['conflictingClientRequirements'] ) );
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;

		$this->assertNull( $fa_load->invoke( fa() ) );
		$this->assertTrue( $failed );
		$this->assertFalse( $enqueued );
		$this->assertFalse( wp_script_is( 'font-awesome-official-v4shim', 'enqueued' ) );
	}

	/**
	 * It should be considered at most redundant, but not an error, if one client requires
	 * the webfont method and another explicitly requires pseudo-element support.
	 * Webfont with CSS always implies pseudo-element support.
	 */
	public function test_webfont_with_pseudo_elements() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'Client A',
						'method' => 'webfont',
						'clientVersion' => '1',
					)
				);
				fa()->register(
					array(
						'name'           => 'Client B',
						'pseudoElements' => 'require',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assertEquals( 'webfont', $load_spec['method'] );
			$this->assertTrue( $load_spec['pseudoElements'] );
			$this->assertTrue( fa()->using_pseudo_elements() );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		global $fa_load;
		$fa_load->invoke( fa() );
		$this->assertTrue( $enqueued );
		$this->assertFalse( $failed );
	}

	/**
	 * It should be considered at most a warning, but not an error, if one client requires
	 * the webfont method and another forbids pseudo-element support.
	 * Webfont with CSS always implies pseudo-element support.
	 */
	public function test_webfont_and_forbid_pseudo_elements() {
		add_action(
			'font_awesome_requirements',
			function() {
				fa()->register(
					array(
						'name'   => 'Client A',
						'method' => 'webfont',
						'clientVersion' => '1',
					)
				);
				fa()->register(
					array(
						'name'           => 'Client B',
						'pseudoElements' => 'forbid',
						'clientVersion' => '1',
					)
				);
			}
		);

		$enqueued          = false;
		$enqueued_callback = function( $load_spec ) use ( &$enqueued ) {
			$enqueued = true;
			$this->assertEquals( 'webfont', $load_spec['method'] );
			$this->assertTrue( $load_spec['pseudoElements'] );
			$this->assertTrue( fa()->using_pseudo_elements() );
		};
		add_action( 'font_awesome_enqueued', $enqueued_callback );

		$failed          = false;
		$failed_callback = function() use ( &$failed ) {
			$failed = true;
		};
		add_action( 'font_awesome_failed', $failed_callback );

		$state = array();
		\FontAwesomePhpUnitUtil\begin_error_log_capture( $state );
		global $fa_load;
		$fa_load->invoke( fa() );
		$err = \FontAwesomePhpUnitUtil\end_error_log_capture( $state );

		$this->assertTrue( $enqueued );
		$this->assertFalse( $failed );
		$this->assertRegExp( '/WARNING: a client of Font Awesome has forbidden pseudo-elements/', $err );
	}

	// TODO: test where the ReleaseProvider would return a null integrity key, both for webfont and svg.
}