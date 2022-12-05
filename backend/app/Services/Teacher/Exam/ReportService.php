<?php

namespace App\Services\Teacher\Exam;

use App\Models\ExamResult;
use App\Services\Base\BaseService;

class ReportService extends BaseService
{
    public function __construct()
    {
        parent::__construct(ExamResult::class);
    }
}
