from django.shortcuts import render, redirect
from django.http import HttpResponse


def home(request):
    return(render(request,'/Users/shiksharawat/Desktop/rock-paper-scissor/rps/rps/home.html'))
