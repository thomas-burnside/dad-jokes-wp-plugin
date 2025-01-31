<?php
/**
 * Plugin Name: TB #11 Dad Joke Generator
 * Description: Returns a dad joke from API.
 * Version: 1.0.0
 * Author: Thomas Burnside
 */

if (!defined('ABSPATH')) {
    exit;
}

function dad_jokes_enqueue_assets() {
    wp_enqueue_style(
        'dad-jokes-style',
        plugin_dir_url(__FILE__) . 'assets/css/style.css'
    );
    wp_enqueue_script(
        'dad-jokes-script',
        plugin_dir_url(__FILE__) . 'assets/js/script.js',
        [],
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'dad_jokes_enqueue_assets'); 

function dad_jokes_shortcode() {
    ob_start();
    ?>
    <div class="dad-jokes">
        <h1 class="heading">Dad Jokes</h1>
        <p class="joke" id="joke"></p>
        <button class="btn" id="btn">Tell me a joke</button>
    </div>
    <?php 
    return ob_get_clean();
}

add_shortcode('dad_jokes', 'dad_jokes_shortcode');
