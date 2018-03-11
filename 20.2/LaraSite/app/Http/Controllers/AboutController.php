<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index() {
    	$site_title = "About My LaraSite!!!";
		$names = ['Lisa Fernandez', 'Tom Jones'];
		$emails = [ 'ljfernandez@hotmail.com', 'tj@test.com'];

	    return view('about', compact('site_title','names', 'emails'));
    }
}
