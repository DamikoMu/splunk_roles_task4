# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: health.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0chealth.proto\x12\x0egrpc.health.v1\"%\n\x12HealthCheckRequest\x12\x0f\n\x07service\x18\x01 \x01(\t\"\xa9\x01\n\x13HealthCheckResponse\x12\x41\n\x06status\x18\x01 \x01(\x0e\x32\x31.grpc.health.v1.HealthCheckResponse.ServingStatus\"O\n\rServingStatus\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0b\n\x07SERVING\x10\x01\x12\x0f\n\x0bNOT_SERVING\x10\x02\x12\x13\n\x0fSERVICE_UNKNOWN\x10\x03\x32\xae\x01\n\x06Health\x12P\n\x05\x43heck\x12\".grpc.health.v1.HealthCheckRequest\x1a#.grpc.health.v1.HealthCheckResponse\x12R\n\x05Watch\x12\".grpc.health.v1.HealthCheckRequest\x1a#.grpc.health.v1.HealthCheckResponse0\x01\x42LZJcd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/spacebridgegrpcb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'health_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'ZJcd.splunkdev.com/mobile/spacebridge-golang-protos/splunkcx/spacebridgegrpc'
  _HEALTHCHECKREQUEST._serialized_start=32
  _HEALTHCHECKREQUEST._serialized_end=69
  _HEALTHCHECKRESPONSE._serialized_start=72
  _HEALTHCHECKRESPONSE._serialized_end=241
  _HEALTHCHECKRESPONSE_SERVINGSTATUS._serialized_start=162
  _HEALTHCHECKRESPONSE_SERVINGSTATUS._serialized_end=241
  _HEALTH._serialized_start=244
  _HEALTH._serialized_end=418
# @@protoc_insertion_point(module_scope)