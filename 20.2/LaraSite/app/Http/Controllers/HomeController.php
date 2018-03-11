<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index() {
    	$site_title = "My LaraSite";
    	return view('welcome', compact('site_title'));
    }
}
