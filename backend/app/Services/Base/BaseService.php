<?php

namespace App\Services\Base;

class BaseService
{
    /**
     * @var string
     */
    public function __construct($model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     */
    public function list($with = [], $where = [])
    {
        return $this->model::with($with)->where($where)->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create($request): void
    {
        $this->model::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show($id, $with = [])
    {
        return $this->model::with($with)->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    $request
     * @param  int  $id
     */
    public function update($request, int $id): void
    {
        $this->model::findOrFail($id)->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy(int $id): void
    {
        $this->model::findOrFail($id)->delete();
    }
}
