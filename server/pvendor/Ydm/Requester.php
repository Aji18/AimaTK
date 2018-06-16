<?php
namespace Ydm;
use RuntimeException;

class RequesterException extends RuntimeException {}

class Requester {
    public static function validate($data, $filters) {
        $cleaned = \Kiss\Utils::array_clean($data, $filters);

        $accept = '';
        foreach ($filters as $k => $v) {
            $k = str_replace(' > ', '>', $k);
            $k = explode('>', $k);
            $k = $k[count($k) - 1];

            $accept = !isset($data[$k]) || $data[$k] === '' || !isset($cleaned[$k]) || $cleaned[$k] === '' ? $k : $accept;
        }

        if ($accept === '') {
            return $cleaned;
        } else {
            throw new RequesterException("req_param_error");
        }
    }
}