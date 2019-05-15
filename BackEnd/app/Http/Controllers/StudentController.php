<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function getAll()
    {
        return response()->json(Student::all());
    }

    public function showOneAuthor($id)
    {
        return response()->json(Student::find($id));
    }

    public function create(Request $request)
    {
        $author = Student::create($request->all());

        return response()->json($author, 201);
    }

    public function update($id, Request $request)
    {
        $author = Student::findOrFail($id);
        $author->update($request->all());

        return response()->json($author, 200);
    }

    public function delete($id)
    {
        Student::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}