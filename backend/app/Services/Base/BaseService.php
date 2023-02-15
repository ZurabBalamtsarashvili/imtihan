<?php

namespace App\Services\Base;

class BaseService
{
    protected string $model;

    /**
     * @var string
     */
    public function __construct(string $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     */
    public function list(array $with = [], array $where = [])
    {
        return $this->model::with($with)->where($where)->latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(object $request): object
    {
        return $this->model::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     */
    public function show(int $id, array $with = [], array $where = [])
    {
        return $this->model::with($with)->where($where)->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param    $request
     * @param  int  $id
     */
    public function update($request, int $id, array $where = [])
    {
        return $this->model::where($where)->findOrFail($id)->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy(int $id, array $where = [])
    {
        return $this->model::where($where)->findOrFail($id)->delete();
    }
}
