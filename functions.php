<?php
// Enqueue Google Fonts and child theme styles
function beyond_care_enqueue_styles() {
    wp_enqueue_style(
        'beyond-care-fonts',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600&display=swap',
        array(),
        null
    );
    wp_enqueue_style(
        'twentytwentyfive-style',
        get_template_directory_uri() . '/style.css'
    );
    wp_enqueue_style(
        'beyond-care-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('twentytwentyfive-style'),
        wp_get_theme()->get('Version')
    );
    wp_enqueue_style(
        'beyond-care-design',
        get_stylesheet_directory_uri() . '/assets/css/design.css',
        array('beyond-care-child-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'beyond_care_enqueue_styles', 20);

// Enqueue editor styles
function beyond_care_editor_styles() {
    add_editor_style('assets/css/design.css');
}
add_action('after_setup_theme', 'beyond_care_editor_styles');

// Register navigation menus
function beyond_care_menus() {
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer'  => 'Footer Navigation',
    ));
}
add_action('after_setup_theme', 'beyond_care_menus');

// Fix whitespace after footer — inline style beats TT5 global styles
function beyond_care_footer_spacing_fix() {
    echo '<style id="bc-footer-fix">
        .wp-site-blocks { padding-bottom: 0 !important; margin-bottom: 0 !important; }
        body { margin-bottom: 0 !important; padding-bottom: 0 !important; }
        .wp-block-post-content { margin-bottom: 0 !important; padding-bottom: 0 !important; }
        html { overflow-x: hidden; }
    </style>';
}
add_action('wp_head', 'beyond_care_footer_spacing_fix', 999);

// Mobile nav overlay — injected right after opening body tag
function beyond_care_mobile_overlay() {
    ?>
    <div id="bc-mobile-overlay" class="bc-mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button class="bc-mobile-overlay-close" aria-label="Close menu" onclick="document.getElementById('bc-mobile-overlay').classList.remove('is-open')">&#x2715;</button>
        <nav>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/locations">Locations</a>
            <a href="/payment-options">Payment</a>
            <a href="/veterans-home-care">Veterans</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact</a>
        </nav>
        <a href="/schedule-consultation" class="bc-mobile-cta">Free Consultation</a>
    </div>
    <?php
}
add_action('wp_body_open', 'beyond_care_mobile_overlay');
